import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-old-school-server');
}

export default function Eldera96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-old-school-server" />;
}
