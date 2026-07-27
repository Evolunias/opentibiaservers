import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-official');
}

export default function TibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="tibiame-official" />;
}
