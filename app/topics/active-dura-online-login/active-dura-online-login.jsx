import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-login');
}

export default function ActiveDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-login" />;
}
