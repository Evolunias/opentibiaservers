import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-ot-server');
}

export default function OldSchoolBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-ot-server" />;
}
