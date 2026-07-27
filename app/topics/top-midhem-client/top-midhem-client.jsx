import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-client');
}

export default function TopMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-client" />;
}
