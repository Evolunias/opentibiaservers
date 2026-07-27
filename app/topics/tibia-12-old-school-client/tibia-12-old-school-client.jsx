import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-client');
}

export default function Tibia12OldSchoolClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-client" />;
}
