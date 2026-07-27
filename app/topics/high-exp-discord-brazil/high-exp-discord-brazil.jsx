import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-brazil');
}

export default function HighExpDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-brazil" />;
}
