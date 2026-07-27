import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-old-school-client');
}

export default function Tibia14OldSchoolClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-old-school-client" />;
}
