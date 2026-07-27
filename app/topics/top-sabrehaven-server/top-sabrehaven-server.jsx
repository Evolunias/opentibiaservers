import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-server');
}

export default function TopSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-server" />;
}
