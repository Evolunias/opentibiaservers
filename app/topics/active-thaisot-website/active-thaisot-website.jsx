import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-website');
}

export default function ActiveThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-website" />;
}
