import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-old-school-tibia');
}

export default function AldoraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="aldora-old-school-tibia" />;
}
