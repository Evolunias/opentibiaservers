import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-discord-server-france');
}

export default function CoxaotWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-discord-server-france" />;
}
