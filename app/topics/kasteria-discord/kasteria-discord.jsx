import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-discord');
}

export default function KasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="kasteria-discord" />;
}
