import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map');
}

export default function SerenityRealMapKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map" />;
}
