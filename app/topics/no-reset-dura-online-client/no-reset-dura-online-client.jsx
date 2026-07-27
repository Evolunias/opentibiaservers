import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-client');
}

export default function NoResetDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-client" />;
}
