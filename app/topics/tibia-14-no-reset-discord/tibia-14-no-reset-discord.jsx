import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-no-reset-discord');
}

export default function Tibia14NoResetDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-no-reset-discord" />;
}
