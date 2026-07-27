import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-tibia');
}

export default function OldSchoolTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-tibia" />;
}
