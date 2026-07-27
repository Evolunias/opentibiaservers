import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-client');
}

export default function ActiveMidhemClientKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-client" />;
}
