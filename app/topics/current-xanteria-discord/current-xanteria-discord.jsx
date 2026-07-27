import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-discord');
}

export default function CurrentXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-discord" />;
}
