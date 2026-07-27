import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-uk');
}

export default function HighExpDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-uk" />;
}
