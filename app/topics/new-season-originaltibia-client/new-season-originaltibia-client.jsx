import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-client');
}

export default function NewSeasonOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-client" />;
}
