import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-old-school-server');
}

export default function Tibia74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-old-school-server" />;
}
