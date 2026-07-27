import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-old-school-server');
}

export default function Carlinot15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-old-school-server" />;
}
