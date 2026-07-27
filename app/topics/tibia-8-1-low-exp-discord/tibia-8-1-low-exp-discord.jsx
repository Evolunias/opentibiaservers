import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-low-exp-discord');
}

export default function Tibia81LowExpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-low-exp-discord" />;
}
