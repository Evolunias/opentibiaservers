import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-old-school-client');
}

export default function Tibia76OldSchoolClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-old-school-client" />;
}
