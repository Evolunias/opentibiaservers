import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-guilds');
}

export default function PaceraGuildsKeywordPage() {
  return <StaticKeywordPage slug="pacera-guilds" />;
}
