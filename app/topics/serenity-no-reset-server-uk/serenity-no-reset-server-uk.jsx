import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-no-reset-server-uk');
}

export default function SerenityNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-no-reset-server-uk" />;
}
