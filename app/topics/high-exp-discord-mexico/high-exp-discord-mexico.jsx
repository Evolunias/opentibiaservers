import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-mexico');
}

export default function HighExpDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-mexico" />;
}
