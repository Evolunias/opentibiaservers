import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-4-retro-server');
}

export default function InfernalOt74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-4-retro-server" />;
}
