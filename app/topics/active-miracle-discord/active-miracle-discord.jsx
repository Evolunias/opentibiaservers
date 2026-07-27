import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-discord');
}

export default function ActiveMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-discord" />;
}
