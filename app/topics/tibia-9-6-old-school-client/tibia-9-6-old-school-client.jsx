import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-old-school-client');
}

export default function Tibia96OldSchoolClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-old-school-client" />;
}
