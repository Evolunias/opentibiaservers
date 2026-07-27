import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-old-school-discord');
}

export default function Tibia81OldSchoolDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-old-school-discord" />;
}
