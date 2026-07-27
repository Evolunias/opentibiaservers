import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-login');
}

export default function BestDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-login" />;
}
