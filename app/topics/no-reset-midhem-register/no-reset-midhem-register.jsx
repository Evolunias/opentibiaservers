import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-register');
}

export default function NoResetMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-register" />;
}
