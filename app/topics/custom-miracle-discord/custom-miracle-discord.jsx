import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-discord');
}

export default function CustomMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-discord" />;
}
