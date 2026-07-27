import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-poland-server');
}

export default function RealestaPolandServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-poland-server" />;
}
