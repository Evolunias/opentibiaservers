import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-canada');
}

export default function LowExpDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-canada" />;
}
