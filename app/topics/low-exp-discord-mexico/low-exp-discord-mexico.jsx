import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-mexico');
}

export default function LowExpDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-mexico" />;
}
