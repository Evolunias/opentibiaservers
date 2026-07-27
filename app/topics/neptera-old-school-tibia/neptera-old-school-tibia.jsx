import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-old-school-tibia');
}

export default function NepteraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="neptera-old-school-tibia" />;
}
