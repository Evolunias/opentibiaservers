import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-servers-europe');
}

export default function SerenityRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-servers-europe" />;
}
