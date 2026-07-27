import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-1-retro-server');
}

export default function InfernalOt81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-1-retro-server" />;
}
