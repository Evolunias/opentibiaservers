import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-discord-server-north-america');
}

export default function CoxaotWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-discord-server-north-america" />;
}
