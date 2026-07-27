import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-register');
}

export default function BestMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-register" />;
}
