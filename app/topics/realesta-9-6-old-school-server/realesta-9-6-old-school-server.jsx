import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-old-school-server');
}

export default function Realesta96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-old-school-server" />;
}
