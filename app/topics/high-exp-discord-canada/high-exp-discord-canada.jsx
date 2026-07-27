import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-canada');
}

export default function HighExpDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-canada" />;
}
