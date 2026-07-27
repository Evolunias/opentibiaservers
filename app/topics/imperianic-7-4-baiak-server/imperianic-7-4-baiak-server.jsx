import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-baiak-server');
}

export default function Imperianic74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-baiak-server" />;
}
