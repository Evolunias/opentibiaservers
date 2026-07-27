import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-usa');
}

export default function ClassicusCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-usa" />;
}
