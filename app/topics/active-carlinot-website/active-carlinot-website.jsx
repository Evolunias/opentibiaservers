import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-website');
}

export default function ActiveCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-website" />;
}
