import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-ot');
}

export default function WithDiscordNilotOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-ot" />;
}
