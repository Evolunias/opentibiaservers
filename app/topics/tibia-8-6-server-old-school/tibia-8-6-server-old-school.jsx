import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-old-school');
}

export default function Tibia86ServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-old-school" />;
}
