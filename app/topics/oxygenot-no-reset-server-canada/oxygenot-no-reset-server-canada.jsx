import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-no-reset-server-canada');
}

export default function OxygenotNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-no-reset-server-canada" />;
}
