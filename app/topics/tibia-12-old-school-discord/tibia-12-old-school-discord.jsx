import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-discord');
}

export default function Tibia12OldSchoolDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-discord" />;
}
