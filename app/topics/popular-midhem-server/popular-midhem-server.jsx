import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-server');
}

export default function PopularMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-server" />;
}
