import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-9-6-old-school-server');
}

export default function Thornia96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-9-6-old-school-server" />;
}
