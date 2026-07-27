import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-website');
}

export default function NewArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-website" />;
}
