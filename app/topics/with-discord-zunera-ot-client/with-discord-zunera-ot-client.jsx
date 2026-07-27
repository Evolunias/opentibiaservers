import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-zunera-ot-client');
}

export default function WithDiscordZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-zunera-ot-client" />;
}
