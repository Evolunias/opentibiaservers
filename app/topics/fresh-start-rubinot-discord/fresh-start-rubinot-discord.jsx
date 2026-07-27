import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-discord');
}

export default function FreshStartRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-discord" />;
}
