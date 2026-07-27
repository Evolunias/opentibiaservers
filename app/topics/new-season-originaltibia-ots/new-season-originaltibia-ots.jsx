import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-ots');
}

export default function NewSeasonOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-ots" />;
}
