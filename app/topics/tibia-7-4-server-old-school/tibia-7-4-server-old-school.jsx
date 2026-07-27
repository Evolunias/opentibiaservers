import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-old-school');
}

export default function Tibia74ServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-old-school" />;
}
