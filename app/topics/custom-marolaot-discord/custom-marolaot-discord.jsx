import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-discord');
}

export default function CustomMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-discord" />;
}
