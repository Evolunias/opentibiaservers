import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-server');
}

export default function NewSeasonOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-server" />;
}
