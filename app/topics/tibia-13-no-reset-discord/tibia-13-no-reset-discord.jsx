import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-discord');
}

export default function Tibia13NoResetDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-discord" />;
}
