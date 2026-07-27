import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-old-school-server');
}

export default function Carlinot71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-old-school-server" />;
}
