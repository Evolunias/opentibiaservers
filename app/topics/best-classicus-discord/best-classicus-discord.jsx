import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-discord');
}

export default function BestClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-discord" />;
}
