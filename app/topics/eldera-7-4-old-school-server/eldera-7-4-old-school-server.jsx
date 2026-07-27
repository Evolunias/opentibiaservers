import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-old-school-server');
}

export default function Eldera74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-old-school-server" />;
}
