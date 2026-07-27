import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-discord');
}

export default function CyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="cyntara-discord" />;
}
