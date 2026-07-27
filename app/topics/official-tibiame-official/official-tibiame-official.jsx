import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-official');
}

export default function OfficialTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-official" />;
}
