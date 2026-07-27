import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-old-school-server');
}

export default function Imperianic11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-old-school-server" />;
}
