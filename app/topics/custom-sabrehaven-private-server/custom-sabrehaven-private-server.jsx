import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-private-server');
}

export default function CustomSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-private-server" />;
}
