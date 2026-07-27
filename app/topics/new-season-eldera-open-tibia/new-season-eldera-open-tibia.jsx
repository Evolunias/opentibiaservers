import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-open-tibia');
}

export default function NewSeasonElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-open-tibia" />;
}
