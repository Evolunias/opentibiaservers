import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-france');
}

export default function WithDiscordWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-france" />;
}
