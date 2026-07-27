import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-tibia');
}

export default function LumineraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-tibia" />;
}
