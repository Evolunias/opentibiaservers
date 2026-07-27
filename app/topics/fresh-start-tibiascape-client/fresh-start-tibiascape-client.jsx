import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-client');
}

export default function FreshStartTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-client" />;
}
