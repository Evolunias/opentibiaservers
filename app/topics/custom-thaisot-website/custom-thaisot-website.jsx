import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-website');
}

export default function CustomThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-website" />;
}
