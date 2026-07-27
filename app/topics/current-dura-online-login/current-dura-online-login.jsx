import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-login');
}

export default function CurrentDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-login" />;
}
