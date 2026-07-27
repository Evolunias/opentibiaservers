import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-discord');
}

export default function PopularMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-discord" />;
}
