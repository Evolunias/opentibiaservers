import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-old-school');
}

export default function TibiaHighExpServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-old-school" />;
}
