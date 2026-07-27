import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-official');
}

export default function CustomTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-official" />;
}
