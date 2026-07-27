import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-guilds');
}

export default function OceraGuildsKeywordPage() {
  return <StaticKeywordPage slug="ocera-guilds" />;
}
