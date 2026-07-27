import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-guilds');
}

export default function SabrehavenGuildsKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-guilds" />;
}
