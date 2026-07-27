import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-low-exp-discord');
}

export default function Tibia13LowExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-low-exp-discord" />;
}
