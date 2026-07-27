import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-north-america');
}

export default function WithDiscordServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-north-america" />;
}
