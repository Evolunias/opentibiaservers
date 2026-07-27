import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-old-school-tibia');
}

export default function HarmoniaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-old-school-tibia" />;
}
