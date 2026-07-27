import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-high-exp-discord');
}

export default function Tibia96HighExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-high-exp-discord" />;
}
