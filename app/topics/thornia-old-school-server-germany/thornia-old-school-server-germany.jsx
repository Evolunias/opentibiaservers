import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-germany');
}

export default function ThorniaOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-germany" />;
}
