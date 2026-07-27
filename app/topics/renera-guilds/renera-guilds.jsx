import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-guilds');
}

export default function ReneraGuildsKeywordPage() {
  return <StaticKeywordPage slug="renera-guilds" />;
}
