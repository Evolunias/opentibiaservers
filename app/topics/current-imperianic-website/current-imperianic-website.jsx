import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-website');
}

export default function CurrentImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-website" />;
}
