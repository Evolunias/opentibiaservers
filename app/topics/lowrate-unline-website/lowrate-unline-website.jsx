import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-website');
}

export default function LowrateUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-website" />;
}
