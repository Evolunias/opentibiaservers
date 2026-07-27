import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-72-old-school-server');
}

export default function Eldera772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-72-old-school-server" />;
}
