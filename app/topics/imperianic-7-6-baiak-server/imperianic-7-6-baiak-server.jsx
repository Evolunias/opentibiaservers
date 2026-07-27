import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-6-baiak-server');
}

export default function Imperianic76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-6-baiak-server" />;
}
