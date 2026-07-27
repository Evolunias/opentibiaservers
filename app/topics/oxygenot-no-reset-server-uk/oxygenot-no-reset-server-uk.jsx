import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-no-reset-server-uk');
}

export default function OxygenotNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-no-reset-server-uk" />;
}
