import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-register');
}

export default function CurrentDuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-register" />;
}
