import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-old-school-discord');
}

export default function Tibia14OldSchoolDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-old-school-discord" />;
}
