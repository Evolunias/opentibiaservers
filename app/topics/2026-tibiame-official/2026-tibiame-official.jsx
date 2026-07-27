import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibiame-official');
}

export default function Keyword2026TibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="2026-tibiame-official" />;
}
