import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-client');
}

export default function TopTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-client" />;
}
