import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-old-school-discord');
}

export default function Tibia100OldSchoolDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-old-school-discord" />;
}
