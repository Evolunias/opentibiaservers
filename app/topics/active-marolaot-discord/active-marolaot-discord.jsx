import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-discord');
}

export default function ActiveMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-discord" />;
}
