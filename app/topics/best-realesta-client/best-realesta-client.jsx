import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-client');
}

export default function BestRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-client" />;
}
