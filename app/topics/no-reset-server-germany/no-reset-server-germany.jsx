import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-germany');
}

export default function NoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-germany" />;
}
