import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-website');
}

export default function NewImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-website" />;
}
