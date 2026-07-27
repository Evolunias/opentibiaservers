import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-98-old-school-server');
}

export default function Thornia1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-98-old-school-server" />;
}
