import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-discord');
}

export default function BestMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-discord" />;
}
