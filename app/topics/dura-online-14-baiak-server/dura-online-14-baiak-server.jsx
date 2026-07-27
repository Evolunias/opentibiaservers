import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-baiak-server');
}

export default function DuraOnline14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-baiak-server" />;
}
