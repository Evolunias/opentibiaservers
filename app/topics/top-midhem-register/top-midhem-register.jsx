import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-register');
}

export default function TopMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-register" />;
}
