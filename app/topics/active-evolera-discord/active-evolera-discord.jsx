import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-discord');
}

export default function ActiveEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-discord" />;
}
