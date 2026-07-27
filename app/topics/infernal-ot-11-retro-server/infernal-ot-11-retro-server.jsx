import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-retro-server');
}

export default function InfernalOt11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-retro-server" />;
}
