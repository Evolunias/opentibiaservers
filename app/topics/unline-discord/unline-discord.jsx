import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-discord');
}

export default function UnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="unline-discord" />;
}
