import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-mexico');
}

export default function ThorniaOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-mexico" />;
}
