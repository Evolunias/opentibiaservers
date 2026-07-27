import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-low-exp-discord');
}

export default function Tibia15LowExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-low-exp-discord" />;
}
