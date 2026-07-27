import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-ots');
}

export default function HighrateTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-ots" />;
}
