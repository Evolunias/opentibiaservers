import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-discord');
}

export default function TopImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-discord" />;
}
