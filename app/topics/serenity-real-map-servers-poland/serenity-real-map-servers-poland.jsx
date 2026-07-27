import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-servers-poland');
}

export default function SerenityRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-servers-poland" />;
}
