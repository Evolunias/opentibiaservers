import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-discord');
}

export default function CustomCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-discord" />;
}
