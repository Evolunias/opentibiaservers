import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-discord');
}

export default function FreshStartAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-discord" />;
}
