import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-ot');
}

export default function WithDiscordThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-ot" />;
}
