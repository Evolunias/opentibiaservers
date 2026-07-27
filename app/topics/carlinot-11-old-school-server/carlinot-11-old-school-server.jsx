import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-old-school-server');
}

export default function Carlinot11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-old-school-server" />;
}
