import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-open-tibia');
}

export default function NewSeasonCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-open-tibia" />;
}
