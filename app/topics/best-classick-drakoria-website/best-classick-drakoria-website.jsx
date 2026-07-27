import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-website');
}

export default function BestClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-website" />;
}
