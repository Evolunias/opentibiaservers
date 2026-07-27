import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-official');
}

export default function LowrateTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-official" />;
}
