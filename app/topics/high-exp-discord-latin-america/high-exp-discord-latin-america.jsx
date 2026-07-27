import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-latin-america');
}

export default function HighExpDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-latin-america" />;
}
