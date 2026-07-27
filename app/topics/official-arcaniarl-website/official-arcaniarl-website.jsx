import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-website');
}

export default function OfficialArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-website" />;
}
