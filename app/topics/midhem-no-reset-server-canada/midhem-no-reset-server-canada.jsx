import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-canada');
}

export default function MidhemNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-canada" />;
}
