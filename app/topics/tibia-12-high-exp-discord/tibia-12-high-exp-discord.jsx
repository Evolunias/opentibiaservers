import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp-discord');
}

export default function Tibia12HighExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp-discord" />;
}
