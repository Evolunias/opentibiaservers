import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-login');
}

export default function DuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="dura-online-login" />;
}
