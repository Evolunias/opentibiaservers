import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-0-baiak-server');
}

export default function Imperianic80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-0-baiak-server" />;
}
