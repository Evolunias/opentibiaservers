import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-tibia');
}

export default function NewSeasonRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-tibia" />;
}
