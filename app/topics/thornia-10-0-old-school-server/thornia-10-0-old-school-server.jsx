import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-0-old-school-server');
}

export default function Thornia100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-0-old-school-server" />;
}
