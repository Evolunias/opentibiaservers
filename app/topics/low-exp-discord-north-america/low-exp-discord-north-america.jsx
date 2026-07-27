import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-north-america');
}

export default function LowExpDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-north-america" />;
}
