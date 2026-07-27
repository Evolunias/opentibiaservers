import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-discord');
}

export default function NewLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-discord" />;
}
