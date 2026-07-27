import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-0-baiak-server');
}

export default function DuraOnline80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-0-baiak-server" />;
}
