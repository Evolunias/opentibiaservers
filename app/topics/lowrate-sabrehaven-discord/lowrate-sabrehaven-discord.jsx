import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-discord');
}

export default function LowrateSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-discord" />;
}
