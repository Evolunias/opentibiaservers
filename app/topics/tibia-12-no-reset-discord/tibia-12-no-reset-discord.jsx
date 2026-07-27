import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-discord');
}

export default function Tibia12NoResetDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-discord" />;
}
