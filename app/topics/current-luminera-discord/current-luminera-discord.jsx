import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-discord');
}

export default function CurrentLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-discord" />;
}
