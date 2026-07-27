import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-official');
}

export default function WithDiscordLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-official" />;
}
