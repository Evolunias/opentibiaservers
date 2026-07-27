import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-website');
}

export default function NewThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-website" />;
}
