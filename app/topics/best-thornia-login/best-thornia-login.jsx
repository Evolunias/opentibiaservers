import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-login');
}

export default function BestThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-login" />;
}
