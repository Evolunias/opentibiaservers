import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-login');
}

export default function BestRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-login" />;
}
