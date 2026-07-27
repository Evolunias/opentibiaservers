import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-servers-europe');
}

export default function SerenityCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-servers-europe" />;
}
