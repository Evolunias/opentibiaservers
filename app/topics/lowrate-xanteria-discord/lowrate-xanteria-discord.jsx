import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-discord');
}

export default function LowrateXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-discord" />;
}
