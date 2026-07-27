import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-servers-uk');
}

export default function SerenityCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-servers-uk" />;
}
