import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-client');
}

export default function Tibia13OldSchoolClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-client" />;
}
