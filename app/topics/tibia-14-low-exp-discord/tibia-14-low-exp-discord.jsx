import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-low-exp-discord');
}

export default function Tibia14LowExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-low-exp-discord" />;
}
