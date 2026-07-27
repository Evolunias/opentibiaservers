import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-client');
}

export default function BestImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-client" />;
}
