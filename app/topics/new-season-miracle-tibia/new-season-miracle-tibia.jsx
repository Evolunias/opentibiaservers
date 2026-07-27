import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-tibia');
}

export default function NewSeasonMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-tibia" />;
}
