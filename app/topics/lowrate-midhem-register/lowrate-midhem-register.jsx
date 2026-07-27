import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-register');
}

export default function LowrateMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-register" />;
}
