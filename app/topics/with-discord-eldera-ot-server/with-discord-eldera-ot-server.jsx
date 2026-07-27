import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-ot-server');
}

export default function WithDiscordElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-ot-server" />;
}
