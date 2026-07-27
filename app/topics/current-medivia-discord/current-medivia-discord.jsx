import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-discord');
}

export default function CurrentMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-discord" />;
}
