import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-private-server');
}

export default function BestSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-private-server" />;
}
