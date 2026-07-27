import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-high-exp-discord');
}

export default function Tibia81HighExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-high-exp-discord" />;
}
