import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-realera-server');
}

export default function BaiakRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-realera-server" />;
}
