import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-tibia');
}

export default function NewSeasonXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-tibia" />;
}
