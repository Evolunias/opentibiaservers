import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-discord');
}

export default function TopMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-discord" />;
}
