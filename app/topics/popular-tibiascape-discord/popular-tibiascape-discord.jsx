import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-discord');
}

export default function PopularTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-discord" />;
}
