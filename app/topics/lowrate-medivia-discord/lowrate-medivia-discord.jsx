import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-discord');
}

export default function LowrateMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-discord" />;
}
