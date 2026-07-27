import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-no-reset-server-canada');
}

export default function SerenityNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-no-reset-server-canada" />;
}
