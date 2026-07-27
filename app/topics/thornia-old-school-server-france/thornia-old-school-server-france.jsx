import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-france');
}

export default function ThorniaOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-france" />;
}
