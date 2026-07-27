import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem');
}

export default function NoResetMidhemKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem" />;
}
