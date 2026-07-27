import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-4-old-school-server');
}

export default function Carlinot74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-4-old-school-server" />;
}
