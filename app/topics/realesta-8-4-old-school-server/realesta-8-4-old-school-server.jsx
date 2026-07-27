import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-4-old-school-server');
}

export default function Realesta84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-4-old-school-server" />;
}
