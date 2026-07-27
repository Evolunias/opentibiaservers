import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-1-old-school-server');
}

export default function Thornia81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-1-old-school-server" />;
}
