import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-old-school-server');
}

export default function Eldera854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-old-school-server" />;
}
