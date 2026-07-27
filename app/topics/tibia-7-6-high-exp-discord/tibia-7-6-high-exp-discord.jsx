import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-high-exp-discord');
}

export default function Tibia76HighExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-high-exp-discord" />;
}
