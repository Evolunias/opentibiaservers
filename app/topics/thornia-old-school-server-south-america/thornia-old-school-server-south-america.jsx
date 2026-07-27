import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-south-america');
}

export default function ThorniaOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-south-america" />;
}
