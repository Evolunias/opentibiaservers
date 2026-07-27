import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-server');
}

export default function CustomMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-server" />;
}
