import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-discord-server-europe');
}

export default function CoxaotWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-discord-server-europe" />;
}
