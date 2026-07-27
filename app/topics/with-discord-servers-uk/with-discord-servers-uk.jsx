import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-uk');
}

export default function WithDiscordServersUkKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-uk" />;
}
