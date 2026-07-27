import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-wiki');
}

export default function RealMapNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-wiki" />;
}
