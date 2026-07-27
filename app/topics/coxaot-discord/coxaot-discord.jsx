import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-discord');
}

export default function CoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="coxaot-discord" />;
}
