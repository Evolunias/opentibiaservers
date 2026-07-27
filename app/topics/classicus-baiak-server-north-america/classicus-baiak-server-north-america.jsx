import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-north-america');
}

export default function ClassicusBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-north-america" />;
}
