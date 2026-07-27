import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-discord');
}

export default function VenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="venoreot-discord" />;
}
