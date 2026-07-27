import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-no-reset-server-north-america');
}

export default function SerenityNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-no-reset-server-north-america" />;
}
