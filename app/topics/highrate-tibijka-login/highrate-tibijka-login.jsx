import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-login');
}

export default function HighrateTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-login" />;
}
