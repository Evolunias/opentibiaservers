import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-discord');
}

export default function OfficialImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-discord" />;
}
