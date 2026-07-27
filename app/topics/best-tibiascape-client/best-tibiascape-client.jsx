import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-client');
}

export default function BestTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-client" />;
}
