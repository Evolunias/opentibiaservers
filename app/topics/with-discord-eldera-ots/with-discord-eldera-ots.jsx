import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-ots');
}

export default function WithDiscordElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-ots" />;
}
