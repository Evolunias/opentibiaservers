import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ot-server-poland');
}

export default function WithDiscordOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ot-server-poland" />;
}
