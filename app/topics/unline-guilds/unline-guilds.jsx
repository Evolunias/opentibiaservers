import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-guilds');
}

export default function UnlineGuildsKeywordPage() {
  return <StaticKeywordPage slug="unline-guilds" />;
}
