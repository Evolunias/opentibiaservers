import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-login');
}

export default function HighrateTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-login" />;
}
