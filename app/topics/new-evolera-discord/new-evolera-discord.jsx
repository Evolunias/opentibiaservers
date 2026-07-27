import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-discord');
}

export default function NewEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-discord" />;
}
