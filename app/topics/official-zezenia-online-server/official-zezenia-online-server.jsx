import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-server');
}

export default function OfficialZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-server" />;
}
