import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-canada');
}

export default function NoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-canada" />;
}
