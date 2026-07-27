import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-discord');
}

export default function CurrentAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-discord" />;
}
