import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-13-old-school-server');
}

export default function Eldera13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-13-old-school-server" />;
}
