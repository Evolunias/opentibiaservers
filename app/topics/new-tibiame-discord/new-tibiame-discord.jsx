import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-discord');
}

export default function NewTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-discord" />;
}
