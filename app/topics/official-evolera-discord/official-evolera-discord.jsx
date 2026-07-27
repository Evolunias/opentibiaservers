import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-discord');
}

export default function OfficialEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-discord" />;
}
