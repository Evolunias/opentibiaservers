import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-discord');
}

export default function BestMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-discord" />;
}
