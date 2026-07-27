import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-login');
}

export default function HighrateTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-login" />;
}
