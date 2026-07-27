import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-server');
}

export default function ActiveDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-server" />;
}
