import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-website');
}

export default function CurrentArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-website" />;
}
