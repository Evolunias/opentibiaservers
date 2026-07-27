import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-server');
}

export default function BestAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-server" />;
}
