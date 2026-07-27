import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-0-old-school-server');
}

export default function Eldera80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-0-old-school-server" />;
}
