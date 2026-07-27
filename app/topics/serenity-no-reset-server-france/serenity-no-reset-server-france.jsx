import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-no-reset-server-france');
}

export default function SerenityNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-no-reset-server-france" />;
}
