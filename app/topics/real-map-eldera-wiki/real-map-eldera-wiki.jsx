import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-wiki');
}

export default function RealMapElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-wiki" />;
}
