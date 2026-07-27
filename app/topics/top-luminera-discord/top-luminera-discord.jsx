import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-discord');
}

export default function TopLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-discord" />;
}
