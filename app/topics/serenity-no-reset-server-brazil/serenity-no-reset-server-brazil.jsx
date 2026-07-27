import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-no-reset-server-brazil');
}

export default function SerenityNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-no-reset-server-brazil" />;
}
