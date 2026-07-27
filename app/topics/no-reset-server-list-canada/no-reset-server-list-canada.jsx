import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-canada');
}

export default function NoResetServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-canada" />;
}
