import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-discord');
}

export default function FreshStartMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-discord" />;
}
