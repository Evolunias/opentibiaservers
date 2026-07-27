import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-discord');
}

export default function LumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="luminera-discord" />;
}
