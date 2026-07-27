import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-ot');
}

export default function HighrateTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-ot" />;
}
