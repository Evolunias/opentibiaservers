import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-discord');
}

export default function TopCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-discord" />;
}
