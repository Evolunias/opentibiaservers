import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-discord');
}

export default function ActiveCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-discord" />;
}
