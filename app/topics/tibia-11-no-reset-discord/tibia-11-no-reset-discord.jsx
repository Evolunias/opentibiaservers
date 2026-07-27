import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-discord');
}

export default function Tibia11NoResetDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-discord" />;
}
