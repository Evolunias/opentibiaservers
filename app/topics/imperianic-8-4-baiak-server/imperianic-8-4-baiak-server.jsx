import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-4-baiak-server');
}

export default function Imperianic84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-4-baiak-server" />;
}
