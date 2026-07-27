import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-website');
}

export default function ImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="imperianic-website" />;
}
