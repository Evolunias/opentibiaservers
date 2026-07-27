import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-server');
}

export default function BestThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-server" />;
}
