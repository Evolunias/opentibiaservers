import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-brazil');
}

export default function LowExpDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-brazil" />;
}
