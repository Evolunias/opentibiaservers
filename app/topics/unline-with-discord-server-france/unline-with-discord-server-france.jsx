import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-discord-server-france');
}

export default function UnlineWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-with-discord-server-france" />;
}
