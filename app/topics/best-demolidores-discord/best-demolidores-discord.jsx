import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-discord');
}

export default function BestDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-discord" />;
}
