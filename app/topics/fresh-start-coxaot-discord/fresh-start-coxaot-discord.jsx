import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-discord');
}

export default function FreshStartCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-discord" />;
}
