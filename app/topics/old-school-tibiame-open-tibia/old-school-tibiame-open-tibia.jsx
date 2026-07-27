import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-open-tibia');
}

export default function OldSchoolTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-open-tibia" />;
}
