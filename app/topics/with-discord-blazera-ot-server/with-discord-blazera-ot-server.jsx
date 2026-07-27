import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-ot-server');
}

export default function WithDiscordBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-ot-server" />;
}
