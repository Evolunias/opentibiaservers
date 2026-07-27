import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-germany');
}

export default function MidhemNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-germany" />;
}
