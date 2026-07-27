import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-old-school-discord');
}

export default function Tibia772OldSchoolDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-old-school-discord" />;
}
