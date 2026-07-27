import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-low-exp-discord');
}

export default function Tibia96LowExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-low-exp-discord" />;
}
