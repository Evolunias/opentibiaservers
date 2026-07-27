import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-server');
}

export default function NoResetMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-server" />;
}
