import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-mexico');
}

export default function EvoleraRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-mexico" />;
}
