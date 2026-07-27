import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-no-reset-discord');
}

export default function Tibia71NoResetDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-no-reset-discord" />;
}
