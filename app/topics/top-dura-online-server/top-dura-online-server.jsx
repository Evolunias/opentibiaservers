import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-server');
}

export default function TopDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-server" />;
}
