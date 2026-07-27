import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-no-reset-server-canada');
}

export default function MediviaNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-no-reset-server-canada" />;
}
