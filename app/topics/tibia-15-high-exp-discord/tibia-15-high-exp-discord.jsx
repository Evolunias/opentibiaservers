import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-discord');
}

export default function Tibia15HighExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-discord" />;
}
