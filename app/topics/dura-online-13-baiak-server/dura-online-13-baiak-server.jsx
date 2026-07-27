import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-13-baiak-server');
}

export default function DuraOnline13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-13-baiak-server" />;
}
