import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-discord-server-usa');
}

export default function CoxaotWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-discord-server-usa" />;
}
