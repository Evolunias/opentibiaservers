import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-europe');
}

export default function ClassicusCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-europe" />;
}
