import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-low-exp-discord');
}

export default function Tibia772LowExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-low-exp-discord" />;
}
