import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-baiak-server');
}

export default function Imperianic12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-baiak-server" />;
}
