import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-ot-server');
}

export default function HighrateTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-ot-server" />;
}
