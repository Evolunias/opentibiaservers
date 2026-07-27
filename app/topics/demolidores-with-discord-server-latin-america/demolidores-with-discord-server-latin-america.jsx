import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-discord-server-latin-america');
}

export default function DemolidoresWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-discord-server-latin-america" />;
}
