import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-website');
}

export default function LowrateRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-website" />;
}
