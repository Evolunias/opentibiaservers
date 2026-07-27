import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-old-school-server');
}

export default function Imperianic74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-old-school-server" />;
}
