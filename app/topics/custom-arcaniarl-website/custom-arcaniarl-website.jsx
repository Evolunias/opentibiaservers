import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-website');
}

export default function CustomArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-website" />;
}
