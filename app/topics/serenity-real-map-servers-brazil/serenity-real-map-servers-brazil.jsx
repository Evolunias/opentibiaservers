import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-servers-brazil');
}

export default function SerenityRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-servers-brazil" />;
}
