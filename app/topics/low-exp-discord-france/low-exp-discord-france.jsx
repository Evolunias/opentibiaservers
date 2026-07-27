import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-discord-france');
}

export default function LowExpDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-discord-france" />;
}
