import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-discord');
}

export default function NoResetLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-discord" />;
}
