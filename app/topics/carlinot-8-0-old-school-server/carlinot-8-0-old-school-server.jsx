import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-0-old-school-server');
}

export default function Carlinot80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-0-old-school-server" />;
}
