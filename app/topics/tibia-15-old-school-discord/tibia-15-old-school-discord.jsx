import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-old-school-discord');
}

export default function Tibia15OldSchoolDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-old-school-discord" />;
}
