import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-discord');
}

export default function NewMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-discord" />;
}
