import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-old-school-client');
}

export default function Tibia81OldSchoolClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-old-school-client" />;
}
