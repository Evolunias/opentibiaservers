import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-discord');
}

export default function BestLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-discord" />;
}
