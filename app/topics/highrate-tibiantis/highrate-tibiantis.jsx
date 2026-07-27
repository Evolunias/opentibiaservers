import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis');
}

export default function HighrateTibiantisKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis" />;
}
