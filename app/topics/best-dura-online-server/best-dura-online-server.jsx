import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-server');
}

export default function BestDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-server" />;
}
