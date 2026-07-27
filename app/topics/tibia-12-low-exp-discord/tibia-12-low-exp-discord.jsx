import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-discord');
}

export default function Tibia12LowExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-discord" />;
}
