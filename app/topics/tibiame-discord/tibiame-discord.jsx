import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-discord');
}

export default function TibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibiame-discord" />;
}
