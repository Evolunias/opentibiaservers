import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-tibia');
}

export default function WithDiscordCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-tibia" />;
}
