import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-no-reset-discord');
}

export default function Tibia854NoResetDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-no-reset-discord" />;
}
