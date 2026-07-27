import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-server');
}

export default function OfficialTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-server" />;
}
