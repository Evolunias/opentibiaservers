import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-old-school-server');
}

export default function Thornia12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-old-school-server" />;
}
