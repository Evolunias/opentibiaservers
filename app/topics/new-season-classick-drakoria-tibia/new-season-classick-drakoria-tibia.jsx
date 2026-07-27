import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-tibia');
}

export default function NewSeasonClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-tibia" />;
}
