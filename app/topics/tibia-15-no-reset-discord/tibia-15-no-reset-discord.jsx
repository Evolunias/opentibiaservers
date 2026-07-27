import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-no-reset-discord');
}

export default function Tibia15NoResetDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-no-reset-discord" />;
}
