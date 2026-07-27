import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-login');
}

export default function OfficialTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-login" />;
}
