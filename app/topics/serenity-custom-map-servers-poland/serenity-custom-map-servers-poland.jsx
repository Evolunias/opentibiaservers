import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-servers-poland');
}

export default function SerenityCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-servers-poland" />;
}
