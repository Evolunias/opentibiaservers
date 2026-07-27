import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-ot-server');
}

export default function OldSchoolTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-ot-server" />;
}
