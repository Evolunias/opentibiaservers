import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-baiak-server');
}

export default function Imperianic11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-baiak-server" />;
}
