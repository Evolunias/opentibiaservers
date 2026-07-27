import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-discord');
}

export default function FreshStartLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-discord" />;
}
