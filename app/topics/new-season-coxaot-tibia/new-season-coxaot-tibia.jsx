import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-tibia');
}

export default function NewSeasonCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-tibia" />;
}
