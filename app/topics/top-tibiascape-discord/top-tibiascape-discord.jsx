import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-discord');
}

export default function TopTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-discord" />;
}
