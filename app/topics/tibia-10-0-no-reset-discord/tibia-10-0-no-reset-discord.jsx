import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-no-reset-discord');
}

export default function Tibia100NoResetDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-no-reset-discord" />;
}
