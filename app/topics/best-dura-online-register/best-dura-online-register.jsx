import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-register');
}

export default function BestDuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-register" />;
}
