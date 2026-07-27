import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-discord');
}

export default function BestCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-discord" />;
}
