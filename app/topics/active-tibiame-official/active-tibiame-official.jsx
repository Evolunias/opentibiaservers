import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-official');
}

export default function ActiveTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-official" />;
}
