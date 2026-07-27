import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-canada');
}

export default function RealeraNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-canada" />;
}
