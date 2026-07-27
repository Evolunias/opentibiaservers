import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-wiki');
}

export default function RealMapNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-wiki" />;
}
