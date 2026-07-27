import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-discord');
}

export default function Tibia11LowExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-discord" />;
}
