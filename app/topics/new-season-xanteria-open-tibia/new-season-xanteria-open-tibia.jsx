import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-open-tibia');
}

export default function NewSeasonXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-open-tibia" />;
}
