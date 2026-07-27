import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-servers-usa');
}

export default function ClassicusCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-servers-usa" />;
}
