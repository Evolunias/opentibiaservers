import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-website');
}

export default function HighrateTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-website" />;
}
