import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-poland-server');
}

export default function TibijkaPolandServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-poland-server" />;
}
