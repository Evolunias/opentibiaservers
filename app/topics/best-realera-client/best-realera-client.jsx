import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-client');
}

export default function BestRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="best-realera-client" />;
}
