import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-discord');
}

export default function Tibia11HighExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-discord" />;
}
