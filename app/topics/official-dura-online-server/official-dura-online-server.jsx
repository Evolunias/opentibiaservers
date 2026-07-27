import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-server');
}

export default function OfficialDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-server" />;
}
