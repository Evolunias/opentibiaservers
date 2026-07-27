import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-open-tibia');
}

export default function WithDiscordMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-open-tibia" />;
}
