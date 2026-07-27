import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-login');
}

export default function NewSeasonTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-login" />;
}
