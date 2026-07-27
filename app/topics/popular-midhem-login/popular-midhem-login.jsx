import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-login');
}

export default function PopularMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-login" />;
}
