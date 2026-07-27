import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-11-old-school-server');
}

export default function Thornia11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-11-old-school-server" />;
}
