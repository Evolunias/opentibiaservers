import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-usa');
}

export default function HighExpDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-usa" />;
}
