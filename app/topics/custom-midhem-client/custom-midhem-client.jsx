import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-client');
}

export default function CustomMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-client" />;
}
