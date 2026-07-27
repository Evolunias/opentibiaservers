import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-north-america');
}

export default function HighExpDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-north-america" />;
}
