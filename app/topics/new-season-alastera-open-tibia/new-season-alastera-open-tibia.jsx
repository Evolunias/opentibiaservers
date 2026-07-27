import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-open-tibia');
}

export default function NewSeasonAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-open-tibia" />;
}
