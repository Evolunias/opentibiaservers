import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-low-exp-discord');
}

export default function Tibia76LowExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-low-exp-discord" />;
}
