import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-server');
}

export default function WithDiscordElderaServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-server" />;
}
