import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-server-europe');
}

export default function SerenityCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-server-europe" />;
}
