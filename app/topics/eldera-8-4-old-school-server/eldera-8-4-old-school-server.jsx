import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-4-old-school-server');
}

export default function Eldera84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-4-old-school-server" />;
}
