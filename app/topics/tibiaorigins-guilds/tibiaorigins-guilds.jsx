import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-guilds');
}

export default function TibiaoriginsGuildsKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-guilds" />;
}
