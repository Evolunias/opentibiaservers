import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-discord-server-sweden');
}

export default function CoxaotWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-discord-server-sweden" />;
}
