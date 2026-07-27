import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-poland');
}

export default function WithDiscordServersPolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-poland" />;
}
