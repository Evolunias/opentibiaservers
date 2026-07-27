import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-north-america');
}

export default function ThorniaOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-north-america" />;
}
