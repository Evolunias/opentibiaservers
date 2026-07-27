import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-wiki');
}

export default function RealMapSerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-wiki" />;
}
