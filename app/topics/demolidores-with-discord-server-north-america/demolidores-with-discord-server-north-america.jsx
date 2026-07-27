import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-discord-server-north-america');
}

export default function DemolidoresWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-discord-server-north-america" />;
}
