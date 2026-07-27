import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-ot-server');
}

export default function OldSchoolRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-ot-server" />;
}
