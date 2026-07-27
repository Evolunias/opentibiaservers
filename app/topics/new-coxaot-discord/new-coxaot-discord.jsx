import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-discord');
}

export default function NewCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-discord" />;
}
