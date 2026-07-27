import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-server');
}

export default function CustomSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-server" />;
}
