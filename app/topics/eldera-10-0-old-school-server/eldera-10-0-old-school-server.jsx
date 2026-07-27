import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-old-school-server');
}

export default function Eldera100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-old-school-server" />;
}
