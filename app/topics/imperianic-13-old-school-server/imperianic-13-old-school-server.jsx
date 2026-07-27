import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-old-school-server');
}

export default function Imperianic13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-old-school-server" />;
}
