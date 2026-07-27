import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-old-school-discord');
}

export default function Tibia854OldSchoolDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-old-school-discord" />;
}
