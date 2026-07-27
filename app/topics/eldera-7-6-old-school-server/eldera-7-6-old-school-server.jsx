import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-old-school-server');
}

export default function Eldera76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-old-school-server" />;
}
