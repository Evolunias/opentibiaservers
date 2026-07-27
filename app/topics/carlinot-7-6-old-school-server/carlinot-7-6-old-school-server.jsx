import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-6-old-school-server');
}

export default function Carlinot76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-6-old-school-server" />;
}
