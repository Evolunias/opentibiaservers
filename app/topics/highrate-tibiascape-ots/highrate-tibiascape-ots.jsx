import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-ots');
}

export default function HighrateTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-ots" />;
}
