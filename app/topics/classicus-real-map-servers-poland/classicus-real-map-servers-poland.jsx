import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-servers-poland');
}

export default function ClassicusRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-servers-poland" />;
}
