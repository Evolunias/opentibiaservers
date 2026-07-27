import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-south-america');
}

export default function EvoClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-client-south-america" />;
}
