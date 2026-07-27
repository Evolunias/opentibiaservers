import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-0-retro-server');
}

export default function InfernalOt80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-0-retro-server" />;
}
