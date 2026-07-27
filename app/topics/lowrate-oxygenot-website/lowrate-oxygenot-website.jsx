import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-website');
}

export default function LowrateOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-website" />;
}
