import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-website');
}

export default function CustomClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-website" />;
}
