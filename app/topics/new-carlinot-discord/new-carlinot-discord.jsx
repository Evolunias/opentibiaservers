import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-discord');
}

export default function NewCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-discord" />;
}
