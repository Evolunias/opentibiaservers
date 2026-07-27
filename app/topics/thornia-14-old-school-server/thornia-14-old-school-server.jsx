import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-old-school-server');
}

export default function Thornia14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-old-school-server" />;
}
