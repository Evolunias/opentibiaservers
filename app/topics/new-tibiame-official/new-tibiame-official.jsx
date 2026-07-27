import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-official');
}

export default function NewTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-official" />;
}
