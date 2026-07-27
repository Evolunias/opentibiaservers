import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-register');
}

export default function NewDuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-register" />;
}
