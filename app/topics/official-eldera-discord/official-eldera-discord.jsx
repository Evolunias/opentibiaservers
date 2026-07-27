import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-discord');
}

export default function OfficialElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-discord" />;
}
