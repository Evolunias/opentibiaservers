import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-discord');
}

export default function Tibia11OldSchoolDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-discord" />;
}
