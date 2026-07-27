import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-login');
}

export default function TopDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-login" />;
}
