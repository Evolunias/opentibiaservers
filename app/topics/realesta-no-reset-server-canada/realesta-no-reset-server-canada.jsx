import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-no-reset-server-canada');
}

export default function RealestaNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-no-reset-server-canada" />;
}
