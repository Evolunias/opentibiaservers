import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-server-chile');
}

export default function SerenityCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-server-chile" />;
}
