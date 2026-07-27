import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-poland');
}

export default function LowExpDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-poland" />;
}
