import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-ots');
}

export default function OldSchoolTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-ots" />;
}
