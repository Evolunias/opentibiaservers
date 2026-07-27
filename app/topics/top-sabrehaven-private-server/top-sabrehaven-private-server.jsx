import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-private-server');
}

export default function TopSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-private-server" />;
}
