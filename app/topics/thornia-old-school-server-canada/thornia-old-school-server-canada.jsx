import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-canada');
}

export default function ThorniaOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-canada" />;
}
