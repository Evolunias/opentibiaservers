import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-latin-america');
}

export default function ThorniaOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-latin-america" />;
}
