import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-website');
}

export default function LowrateArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-website" />;
}
