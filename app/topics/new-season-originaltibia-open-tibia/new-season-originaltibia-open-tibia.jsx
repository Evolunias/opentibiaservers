import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-open-tibia');
}

export default function NewSeasonOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-open-tibia" />;
}
