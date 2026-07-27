import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-98-old-school-server');
}

export default function Carlinot1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-98-old-school-server" />;
}
