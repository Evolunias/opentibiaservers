import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-old-school');
}

export default function TibiaCustomServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-old-school" />;
}
