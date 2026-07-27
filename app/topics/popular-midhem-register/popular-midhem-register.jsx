import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-register');
}

export default function PopularMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-register" />;
}
