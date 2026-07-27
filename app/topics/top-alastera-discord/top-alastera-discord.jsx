import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-discord');
}

export default function TopAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-discord" />;
}
