import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-discord-france');
}

export default function BaiakDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-discord-france" />;
}
