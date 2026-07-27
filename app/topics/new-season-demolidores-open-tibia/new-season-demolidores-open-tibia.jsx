import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-open-tibia');
}

export default function NewSeasonDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-open-tibia" />;
}
