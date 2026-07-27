import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-old-school-server');
}

export default function Carlinot12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-old-school-server" />;
}
