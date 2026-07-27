import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fresh-start-server-north-america');
}

export default function SerenityFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-fresh-start-server-north-america" />;
}
