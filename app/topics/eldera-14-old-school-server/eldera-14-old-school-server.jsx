import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-old-school-server');
}

export default function Eldera14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-old-school-server" />;
}
