import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-client');
}

export default function BestMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-client" />;
}
