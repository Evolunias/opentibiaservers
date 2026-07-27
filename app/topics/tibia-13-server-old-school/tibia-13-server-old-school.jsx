import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-old-school');
}

export default function Tibia13ServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-old-school" />;
}
