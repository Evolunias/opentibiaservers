import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-sabrehaven-server');
}

export default function BaiakSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-sabrehaven-server" />;
}
