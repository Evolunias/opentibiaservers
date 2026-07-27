import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-1-old-school-server');
}

export default function Imperianic81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-1-old-school-server" />;
}
