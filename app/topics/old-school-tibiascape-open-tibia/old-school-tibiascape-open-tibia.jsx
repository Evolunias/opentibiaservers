import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-open-tibia');
}

export default function OldSchoolTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-open-tibia" />;
}
