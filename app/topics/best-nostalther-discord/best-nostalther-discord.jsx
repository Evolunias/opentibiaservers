import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-discord');
}

export default function BestNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-discord" />;
}
