import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-open-tibia');
}

export default function NewSeasonImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-open-tibia" />;
}
