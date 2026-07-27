import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-discord');
}

export default function MiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="miracle-discord" />;
}
