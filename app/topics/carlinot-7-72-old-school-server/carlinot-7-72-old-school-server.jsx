import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-72-old-school-server');
}

export default function Carlinot772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-72-old-school-server" />;
}
