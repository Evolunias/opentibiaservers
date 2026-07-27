import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-old-school');
}

export default function TibiaPrivateServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-old-school" />;
}
