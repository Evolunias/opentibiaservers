import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-0-old-school-server');
}

export default function Thornia80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-0-old-school-server" />;
}
