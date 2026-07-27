import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-register');
}

export default function CurrentMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-register" />;
}
