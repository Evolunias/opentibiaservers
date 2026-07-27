import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-tibia');
}

export default function NewSeasonSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-tibia" />;
}
