import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-usa');
}

export default function ThorniaOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-usa" />;
}
