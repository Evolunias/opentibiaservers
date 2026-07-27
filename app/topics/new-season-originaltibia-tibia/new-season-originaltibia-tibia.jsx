import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-tibia');
}

export default function NewSeasonOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-tibia" />;
}
