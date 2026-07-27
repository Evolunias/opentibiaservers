import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-client');
}

export default function OfficialTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-client" />;
}
