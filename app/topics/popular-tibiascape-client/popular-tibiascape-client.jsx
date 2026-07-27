import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-client');
}

export default function PopularTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-client" />;
}
