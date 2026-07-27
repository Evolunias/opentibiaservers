import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-server');
}

export default function PopularDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-server" />;
}
