import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-9-6-old-school-server');
}

export default function Carlinot96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-9-6-old-school-server" />;
}
