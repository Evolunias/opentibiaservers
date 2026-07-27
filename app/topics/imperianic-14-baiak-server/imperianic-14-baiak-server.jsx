import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-14-baiak-server');
}

export default function Imperianic14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-14-baiak-server" />;
}
