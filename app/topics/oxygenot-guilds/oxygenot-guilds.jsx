import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-guilds');
}

export default function OxygenotGuildsKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-guilds" />;
}
