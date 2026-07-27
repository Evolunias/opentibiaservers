import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-low-exp-discord');
}

export default function Tibia71LowExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-low-exp-discord" />;
}
