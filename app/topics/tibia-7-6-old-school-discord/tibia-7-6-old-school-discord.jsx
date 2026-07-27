import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-old-school-discord');
}

export default function Tibia76OldSchoolDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-old-school-discord" />;
}
