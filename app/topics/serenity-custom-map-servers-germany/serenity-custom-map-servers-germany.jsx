import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-servers-germany');
}

export default function SerenityCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-servers-germany" />;
}
