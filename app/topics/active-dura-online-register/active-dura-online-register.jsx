import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-register');
}

export default function ActiveDuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-register" />;
}
