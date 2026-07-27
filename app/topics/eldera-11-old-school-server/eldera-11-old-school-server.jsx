import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-old-school-server');
}

export default function Eldera11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-old-school-server" />;
}
