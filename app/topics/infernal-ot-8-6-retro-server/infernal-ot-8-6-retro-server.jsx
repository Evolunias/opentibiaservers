import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-6-retro-server');
}

export default function InfernalOt86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-6-retro-server" />;
}
