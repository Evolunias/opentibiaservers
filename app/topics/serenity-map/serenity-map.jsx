import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-map');
}

export default function SerenityMapKeywordPage() {
  return <StaticKeywordPage slug="serenity-map" />;
}
