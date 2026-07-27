import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-ot');
}

export default function NoResetMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-ot" />;
}
