import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-dura-online-server');
}

export default function BaiakDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-dura-online-server" />;
}
