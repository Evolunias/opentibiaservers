import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-official');
}

export default function CurrentTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-official" />;
}
