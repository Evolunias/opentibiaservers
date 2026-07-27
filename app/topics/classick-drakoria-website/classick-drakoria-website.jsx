import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-website');
}

export default function ClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-website" />;
}
