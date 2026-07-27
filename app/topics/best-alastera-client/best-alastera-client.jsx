import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-client');
}

export default function BestAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-client" />;
}
