import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-ot-server');
}

export default function NewSeasonOriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-ot-server" />;
}
