import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-guilds');
}

export default function HoneraGuildsKeywordPage() {
  return <StaticKeywordPage slug="honera-guilds" />;
}
