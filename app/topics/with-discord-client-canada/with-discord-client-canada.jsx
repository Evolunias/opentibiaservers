import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-canada');
}

export default function WithDiscordClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-canada" />;
}
