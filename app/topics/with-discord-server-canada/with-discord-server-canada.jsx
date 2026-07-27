import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-canada');
}

export default function WithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-canada" />;
}
