import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-website');
}

export default function ActiveClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-website" />;
}
