import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-poland');
}

export default function WithDiscordClientPolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-poland" />;
}
