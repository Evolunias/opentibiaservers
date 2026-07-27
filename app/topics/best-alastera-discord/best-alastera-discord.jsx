import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-discord');
}

export default function BestAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-discord" />;
}
