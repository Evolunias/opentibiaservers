import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-discord');
}

export default function FreshStartSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-discord" />;
}
