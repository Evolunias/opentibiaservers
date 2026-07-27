import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-ots');
}

export default function NoResetMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-ots" />;
}
