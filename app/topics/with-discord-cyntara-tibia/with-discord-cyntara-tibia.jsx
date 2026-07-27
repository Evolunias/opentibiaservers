import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-tibia');
}

export default function WithDiscordCyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-tibia" />;
}
