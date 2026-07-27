import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-discord');
}

export default function ActiveCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-discord" />;
}
