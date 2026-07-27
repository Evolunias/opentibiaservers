import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-ot-server');
}

export default function HighrateTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-ot-server" />;
}
