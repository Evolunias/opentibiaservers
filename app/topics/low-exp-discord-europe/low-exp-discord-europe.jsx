import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-europe');
}

export default function LowExpDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-europe" />;
}
