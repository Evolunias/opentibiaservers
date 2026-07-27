import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-ot');
}

export default function NewSeasonOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-ot" />;
}
