import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-south-america');
}

export default function EvoleraRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-south-america" />;
}
