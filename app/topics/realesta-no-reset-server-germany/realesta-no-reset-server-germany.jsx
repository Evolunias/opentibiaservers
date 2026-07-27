import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-no-reset-server-germany');
}

export default function RealestaNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-no-reset-server-germany" />;
}
