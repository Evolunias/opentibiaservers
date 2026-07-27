import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-ot');
}

export default function HighrateTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-ot" />;
}
