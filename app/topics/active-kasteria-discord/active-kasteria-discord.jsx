import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-discord');
}

export default function ActiveKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-discord" />;
}
