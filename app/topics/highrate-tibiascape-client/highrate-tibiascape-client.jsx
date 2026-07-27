import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-client');
}

export default function HighrateTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-client" />;
}
