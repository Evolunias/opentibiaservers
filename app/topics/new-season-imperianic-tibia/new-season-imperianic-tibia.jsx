import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-tibia');
}

export default function NewSeasonImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-tibia" />;
}
