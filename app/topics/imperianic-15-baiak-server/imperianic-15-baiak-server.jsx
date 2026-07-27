import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-baiak-server');
}

export default function Imperianic15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-baiak-server" />;
}
