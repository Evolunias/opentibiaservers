import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-discord');
}

export default function OfficialUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-unline-discord" />;
}
