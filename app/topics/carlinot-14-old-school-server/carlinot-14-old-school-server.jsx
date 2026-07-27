import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-old-school-server');
}

export default function Carlinot14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-old-school-server" />;
}
