import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-high-exp-discord');
}

export default function Tibia84HighExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-high-exp-discord" />;
}
