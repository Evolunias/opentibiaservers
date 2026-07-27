import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-private-server');
}

export default function BestAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-private-server" />;
}
