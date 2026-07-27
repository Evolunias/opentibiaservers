import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-website');
}

export default function LowrateCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-website" />;
}
