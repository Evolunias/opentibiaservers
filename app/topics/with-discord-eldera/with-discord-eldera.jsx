import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera');
}

export default function WithDiscordElderaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera" />;
}
