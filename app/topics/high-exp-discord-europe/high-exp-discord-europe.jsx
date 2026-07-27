import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-europe');
}

export default function HighExpDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-europe" />;
}
