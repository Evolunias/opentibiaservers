import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-discord');
}

export default function CurrentSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-discord" />;
}
