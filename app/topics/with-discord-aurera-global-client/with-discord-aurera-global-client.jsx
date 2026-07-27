import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-aurera-global-client');
}

export default function WithDiscordAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-aurera-global-client" />;
}
