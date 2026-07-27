import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-register');
}

export default function PopularDuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-register" />;
}
