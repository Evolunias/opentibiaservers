import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-6-baiak-server');
}

export default function Imperianic86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-6-baiak-server" />;
}
