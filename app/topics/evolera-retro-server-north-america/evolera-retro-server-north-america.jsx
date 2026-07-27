import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-north-america');
}

export default function EvoleraRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-north-america" />;
}
