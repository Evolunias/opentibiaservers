import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-poland');
}

export default function ThorniaOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-poland" />;
}
