import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-server');
}

export default function HighrateTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-server" />;
}
