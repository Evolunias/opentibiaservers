import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-6-old-school-server');
}

export default function Thornia86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-6-old-school-server" />;
}
