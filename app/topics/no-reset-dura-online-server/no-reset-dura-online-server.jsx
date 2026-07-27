import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-server');
}

export default function NoResetDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-server" />;
}
