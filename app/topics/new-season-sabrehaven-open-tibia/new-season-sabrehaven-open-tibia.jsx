import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-open-tibia');
}

export default function NewSeasonSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-open-tibia" />;
}
