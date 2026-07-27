import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-discord-server-poland');
}

export default function CoxaotWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-discord-server-poland" />;
}
