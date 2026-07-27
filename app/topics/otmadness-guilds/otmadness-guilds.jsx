import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-guilds');
}

export default function OtmadnessGuildsKeywordPage() {
  return <StaticKeywordPage slug="otmadness-guilds" />;
}
