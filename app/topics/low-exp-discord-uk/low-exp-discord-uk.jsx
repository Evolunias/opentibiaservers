import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-uk');
}

export default function LowExpDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-uk" />;
}
