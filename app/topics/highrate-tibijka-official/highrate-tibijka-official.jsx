import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-official');
}

export default function HighrateTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-official" />;
}
