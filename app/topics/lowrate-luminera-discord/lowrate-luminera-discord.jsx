import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-discord');
}

export default function LowrateLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-discord" />;
}
