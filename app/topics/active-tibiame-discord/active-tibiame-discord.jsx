import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-discord');
}

export default function ActiveTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-discord" />;
}
