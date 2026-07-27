import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-argentina');
}

export default function HighExpDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-argentina" />;
}
