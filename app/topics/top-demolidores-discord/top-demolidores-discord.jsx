import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-discord');
}

export default function TopDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-discord" />;
}
