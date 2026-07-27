import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-register');
}

export default function NewSeasonTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-register" />;
}
