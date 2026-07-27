import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-website');
}

export default function ArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-website" />;
}
