import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-register');
}

export default function TopDuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-register" />;
}
