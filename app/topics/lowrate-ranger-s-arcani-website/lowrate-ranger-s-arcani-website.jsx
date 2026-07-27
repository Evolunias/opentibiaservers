import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-website');
}

export default function LowrateRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-website" />;
}
