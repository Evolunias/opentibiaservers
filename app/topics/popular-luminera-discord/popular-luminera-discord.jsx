import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-discord');
}

export default function PopularLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-discord" />;
}
