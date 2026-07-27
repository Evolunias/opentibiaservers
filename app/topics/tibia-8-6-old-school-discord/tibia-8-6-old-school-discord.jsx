import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-old-school-discord');
}

export default function Tibia86OldSchoolDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-old-school-discord" />;
}
