import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-baiak-server');
}

export default function Imperianic100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-baiak-server" />;
}
