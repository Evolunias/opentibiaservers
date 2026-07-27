import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-discord');
}

export default function Tibia13OldSchoolDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-discord" />;
}
