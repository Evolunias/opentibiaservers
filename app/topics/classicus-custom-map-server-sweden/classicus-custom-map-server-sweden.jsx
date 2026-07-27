import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-sweden');
}

export default function ClassicusCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-sweden" />;
}
