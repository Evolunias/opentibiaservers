import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-old-school-server');
}

export default function Thornia772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-old-school-server" />;
}
