import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-guilds');
}

export default function RangerSArcaniGuildsKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-guilds" />;
}
