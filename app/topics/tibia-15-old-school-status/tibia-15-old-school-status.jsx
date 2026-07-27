import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-old-school-status');
}

export default function Tibia15OldSchoolStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-old-school-status" />;
}
