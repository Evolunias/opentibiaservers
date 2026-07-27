import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-argentina');
}

export default function ClassicusCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-argentina" />;
}
