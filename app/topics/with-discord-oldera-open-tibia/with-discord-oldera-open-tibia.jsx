import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-open-tibia');
}

export default function WithDiscordOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-open-tibia" />;
}
