import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-discord');
}

export default function ActiveLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-discord" />;
}
