import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ot-server-europe');
}

export default function WithDiscordOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ot-server-europe" />;
}
