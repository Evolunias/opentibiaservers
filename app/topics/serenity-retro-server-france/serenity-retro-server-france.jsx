import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-retro-server-france');
}

export default function SerenityRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-retro-server-france" />;
}
