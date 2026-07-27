import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-server');
}

export default function ActiveMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-server" />;
}
