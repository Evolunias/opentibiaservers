import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-poland');
}

export default function HighExpDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-poland" />;
}
