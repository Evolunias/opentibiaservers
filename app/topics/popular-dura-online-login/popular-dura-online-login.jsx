import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-login');
}

export default function PopularDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-login" />;
}
