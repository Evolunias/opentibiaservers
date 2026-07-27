import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-no-reset-server-argentina');
}

export default function SerenityNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-no-reset-server-argentina" />;
}
