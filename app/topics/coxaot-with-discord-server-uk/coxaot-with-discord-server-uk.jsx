import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-discord-server-uk');
}

export default function CoxaotWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-discord-server-uk" />;
}
