import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-discord');
}

export default function BestOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-discord" />;
}
