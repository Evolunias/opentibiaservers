import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-north-america');
}

export default function AlasteraBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-north-america" />;
}
