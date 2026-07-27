import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-discord');
}

export default function FreshStartDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-discord" />;
}
