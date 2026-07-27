import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-guilds');
}

export default function DemolidoresGuildsKeywordPage() {
  return <StaticKeywordPage slug="demolidores-guilds" />;
}
