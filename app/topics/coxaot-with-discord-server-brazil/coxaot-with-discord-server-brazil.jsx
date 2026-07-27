import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-discord-server-brazil');
}

export default function CoxaotWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-discord-server-brazil" />;
}
