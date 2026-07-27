import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-guilds');
}

export default function DoleraGuildsKeywordPage() {
  return <StaticKeywordPage slug="dolera-guilds" />;
}
