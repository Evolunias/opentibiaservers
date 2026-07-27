import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-aurera-global');
}

export default function WithDiscordAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="with-discord-aurera-global" />;
}
