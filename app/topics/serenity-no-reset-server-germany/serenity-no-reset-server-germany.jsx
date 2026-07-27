import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-no-reset-server-germany');
}

export default function SerenityNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-no-reset-server-germany" />;
}
