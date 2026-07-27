import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-client');
}

export default function MidhemClientKeywordPage() {
  return <StaticKeywordPage slug="midhem-client" />;
}
