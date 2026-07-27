import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-open-tibia');
}

export default function WithDiscordLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-open-tibia" />;
}
