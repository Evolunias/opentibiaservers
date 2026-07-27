import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-official');
}

export default function FreshStartTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-official" />;
}
