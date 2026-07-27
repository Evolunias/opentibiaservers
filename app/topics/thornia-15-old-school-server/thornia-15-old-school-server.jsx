import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-old-school-server');
}

export default function Thornia15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-old-school-server" />;
}
