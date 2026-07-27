import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-client');
}

export default function WithDiscordElderaClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-client" />;
}
