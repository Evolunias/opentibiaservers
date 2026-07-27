import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-servers-uk');
}

export default function SerenityRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-servers-uk" />;
}
