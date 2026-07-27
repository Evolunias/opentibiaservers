import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-server');
}

export default function ActiveSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-server" />;
}
