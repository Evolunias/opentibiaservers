import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-register');
}

export default function DuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="dura-online-register" />;
}
