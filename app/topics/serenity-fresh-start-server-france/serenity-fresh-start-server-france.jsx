import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fresh-start-server-france');
}

export default function SerenityFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-fresh-start-server-france" />;
}
