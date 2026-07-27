import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-high-exp-discord');
}

export default function Tibia71HighExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-high-exp-discord" />;
}
