import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-login');
}

export default function OfficialDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-login" />;
}
