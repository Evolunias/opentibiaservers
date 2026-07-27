import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-tibia');
}

export default function NewSeasonAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-tibia" />;
}
