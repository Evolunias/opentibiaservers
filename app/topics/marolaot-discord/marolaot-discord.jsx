import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-discord');
}

export default function MarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="marolaot-discord" />;
}
