import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-coxaot-open-tibia');
}

export default function WithDiscordCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-coxaot-open-tibia" />;
}
