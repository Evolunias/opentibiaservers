import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-canada');
}

export default function WithDiscordServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-canada" />;
}
