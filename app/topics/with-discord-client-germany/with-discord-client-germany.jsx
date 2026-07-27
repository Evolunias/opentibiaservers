import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-germany');
}

export default function WithDiscordClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-germany" />;
}
