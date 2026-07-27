import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-guilds');
}

export default function NepteraGuildsKeywordPage() {
  return <StaticKeywordPage slug="neptera-guilds" />;
}
