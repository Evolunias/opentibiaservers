import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-ot');
}

export default function OldSchoolTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-ot" />;
}
