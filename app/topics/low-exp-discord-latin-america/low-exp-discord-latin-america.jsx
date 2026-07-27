import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-latin-america');
}

export default function LowExpDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-latin-america" />;
}
