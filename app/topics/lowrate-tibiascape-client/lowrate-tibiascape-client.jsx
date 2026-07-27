import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-client');
}

export default function LowrateTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-client" />;
}
