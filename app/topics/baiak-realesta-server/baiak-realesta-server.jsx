import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-realesta-server');
}

export default function BaiakRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-realesta-server" />;
}
