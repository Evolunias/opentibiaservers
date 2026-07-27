import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-germany');
}

export default function RealeraNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-germany" />;
}
