import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classick-drakoria-tibia');
}

export default function WithDiscordClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classick-drakoria-tibia" />;
}
