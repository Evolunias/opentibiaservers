import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-website');
}

export default function BestImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-website" />;
}
