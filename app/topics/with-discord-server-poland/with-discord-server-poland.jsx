import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-poland');
}

export default function WithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-poland" />;
}
