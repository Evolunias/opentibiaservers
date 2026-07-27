import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-login');
}

export default function NoResetMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-login" />;
}
