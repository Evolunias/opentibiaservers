import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-discord-france');
}

export default function HighExpDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-discord-france" />;
}
