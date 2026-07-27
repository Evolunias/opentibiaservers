import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-guilds');
}

export default function CyntaraGuildsKeywordPage() {
  return <StaticKeywordPage slug="cyntara-guilds" />;
}
