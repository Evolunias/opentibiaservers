import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-discord-server-latin-america');
}

export default function CoxaotWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-discord-server-latin-america" />;
}
