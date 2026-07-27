import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-open-tibia');
}

export default function WithDiscordAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-open-tibia" />;
}
