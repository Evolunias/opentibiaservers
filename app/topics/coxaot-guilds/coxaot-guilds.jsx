import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-guilds');
}

export default function CoxaotGuildsKeywordPage() {
  return <StaticKeywordPage slug="coxaot-guilds" />;
}
