import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-discord');
}

export default function OfficialLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-discord" />;
}
