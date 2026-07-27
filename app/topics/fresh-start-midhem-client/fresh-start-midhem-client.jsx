import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-client');
}

export default function FreshStartMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-client" />;
}
