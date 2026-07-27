import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-ot-server');
}

export default function NoResetMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-ot-server" />;
}
