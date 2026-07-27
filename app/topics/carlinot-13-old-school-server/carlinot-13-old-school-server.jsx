import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-old-school-server');
}

export default function Carlinot13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-old-school-server" />;
}
