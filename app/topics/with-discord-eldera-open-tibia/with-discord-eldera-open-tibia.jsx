import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-open-tibia');
}

export default function WithDiscordElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-open-tibia" />;
}
