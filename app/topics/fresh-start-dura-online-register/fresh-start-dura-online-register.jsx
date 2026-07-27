import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-register');
}

export default function FreshStartDuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-register" />;
}
