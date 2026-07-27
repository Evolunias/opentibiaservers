import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-aurera-global-ots');
}

export default function WithDiscordAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-aurera-global-ots" />;
}
