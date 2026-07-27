import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-discord');
}

export default function BestXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-discord" />;
}
