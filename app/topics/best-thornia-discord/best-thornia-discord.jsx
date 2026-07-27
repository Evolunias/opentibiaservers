import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-discord');
}

export default function BestThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-discord" />;
}
