import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-old-school-server');
}

export default function Eldera12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-old-school-server" />;
}
