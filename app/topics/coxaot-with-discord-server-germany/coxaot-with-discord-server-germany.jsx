import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-discord-server-germany');
}

export default function CoxaotWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-discord-server-germany" />;
}
