import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-no-reset-server-sweden');
}

export default function SerenityNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="serenity-no-reset-server-sweden" />;
}
