import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-no-reset-discord');
}

export default function Tibia96NoResetDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-no-reset-discord" />;
}
