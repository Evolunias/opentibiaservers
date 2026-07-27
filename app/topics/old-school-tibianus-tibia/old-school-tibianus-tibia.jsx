import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibianus-tibia');
}

export default function OldSchoolTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibianus-tibia" />;
}
