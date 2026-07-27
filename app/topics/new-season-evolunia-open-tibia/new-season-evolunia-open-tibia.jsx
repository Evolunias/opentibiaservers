import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-open-tibia');
}

export default function NewSeasonEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-open-tibia" />;
}
