import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-discord');
}

export default function BestImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-discord" />;
}
