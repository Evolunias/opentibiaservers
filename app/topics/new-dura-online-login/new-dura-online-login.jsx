import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-login');
}

export default function NewDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-login" />;
}
