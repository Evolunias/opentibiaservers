import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-argentina');
}

export default function LowExpDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-argentina" />;
}
