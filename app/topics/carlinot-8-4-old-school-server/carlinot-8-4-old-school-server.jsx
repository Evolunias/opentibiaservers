import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-4-old-school-server');
}

export default function Carlinot84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-4-old-school-server" />;
}
