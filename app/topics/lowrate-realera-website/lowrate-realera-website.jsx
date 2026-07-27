import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-website');
}

export default function LowrateRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-website" />;
}
