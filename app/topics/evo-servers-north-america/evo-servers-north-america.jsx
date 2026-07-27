import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-north-america');
}

export default function EvoServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-north-america" />;
}
