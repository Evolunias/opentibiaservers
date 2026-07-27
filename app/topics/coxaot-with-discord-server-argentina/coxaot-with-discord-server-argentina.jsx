import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-discord-server-argentina');
}

export default function CoxaotWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-discord-server-argentina" />;
}
