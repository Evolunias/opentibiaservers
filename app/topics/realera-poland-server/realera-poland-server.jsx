import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-poland-server');
}

export default function RealeraPolandServerKeywordPage() {
  return <StaticKeywordPage slug="realera-poland-server" />;
}
