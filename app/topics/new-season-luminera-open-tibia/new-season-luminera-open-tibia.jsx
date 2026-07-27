import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-open-tibia');
}

export default function NewSeasonLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-open-tibia" />;
}
