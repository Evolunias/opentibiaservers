import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-old-school-tibia');
}

export default function ObsidiaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="obsidia-old-school-tibia" />;
}
