import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-client');
}

export default function PopularMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-client" />;
}
