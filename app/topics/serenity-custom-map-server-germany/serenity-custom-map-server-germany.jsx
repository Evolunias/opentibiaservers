import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-server-germany');
}

export default function SerenityCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-server-germany" />;
}
