import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-client');
}

export default function BestThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-client" />;
}
