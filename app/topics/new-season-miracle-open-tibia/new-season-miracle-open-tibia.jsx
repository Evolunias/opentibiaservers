import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-open-tibia');
}

export default function NewSeasonMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-open-tibia" />;
}
