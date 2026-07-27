import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-72-retro-server');
}

export default function InfernalOt772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-72-retro-server" />;
}
