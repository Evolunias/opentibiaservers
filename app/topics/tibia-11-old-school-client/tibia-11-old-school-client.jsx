import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-client');
}

export default function Tibia11OldSchoolClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-client" />;
}
