import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-discord');
}

export default function OfficialDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-discord" />;
}
