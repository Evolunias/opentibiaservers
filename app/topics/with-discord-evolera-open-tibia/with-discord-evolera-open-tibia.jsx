import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-open-tibia');
}

export default function WithDiscordEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-open-tibia" />;
}
