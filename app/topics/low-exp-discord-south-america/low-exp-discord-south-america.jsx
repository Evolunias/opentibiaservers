import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-south-america');
}

export default function LowExpDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-south-america" />;
}
