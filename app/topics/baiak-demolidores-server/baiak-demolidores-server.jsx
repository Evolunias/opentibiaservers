import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-demolidores-server');
}

export default function BaiakDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-demolidores-server" />;
}
