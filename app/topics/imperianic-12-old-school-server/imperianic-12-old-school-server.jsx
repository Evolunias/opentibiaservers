import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-old-school-server');
}

export default function Imperianic12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-old-school-server" />;
}
