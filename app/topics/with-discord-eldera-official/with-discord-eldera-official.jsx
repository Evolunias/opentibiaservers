import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-official');
}

export default function WithDiscordElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-official" />;
}
