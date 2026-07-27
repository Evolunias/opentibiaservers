import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-official');
}

export default function HighrateTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-official" />;
}
