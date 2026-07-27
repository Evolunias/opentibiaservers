import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-no-reset-server-poland');
}

export default function SerenityNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-no-reset-server-poland" />;
}
