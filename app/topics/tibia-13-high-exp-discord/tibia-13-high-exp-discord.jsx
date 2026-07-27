import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-discord');
}

export default function Tibia13HighExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-discord" />;
}
