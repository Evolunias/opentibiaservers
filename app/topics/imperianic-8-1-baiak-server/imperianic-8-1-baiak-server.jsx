import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-1-baiak-server');
}

export default function Imperianic81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-1-baiak-server" />;
}
