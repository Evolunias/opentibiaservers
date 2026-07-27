import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-official');
}

export default function NewSeasonOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-official" />;
}
