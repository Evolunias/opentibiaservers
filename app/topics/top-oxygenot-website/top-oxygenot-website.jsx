import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-website');
}

export default function TopOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-website" />;
}
