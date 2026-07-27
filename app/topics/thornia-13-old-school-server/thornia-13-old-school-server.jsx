import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-13-old-school-server');
}

export default function Thornia13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-13-old-school-server" />;
}
