import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia');
}

export default function NewSeasonOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia" />;
}
