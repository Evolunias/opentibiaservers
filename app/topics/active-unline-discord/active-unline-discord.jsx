import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-discord');
}

export default function ActiveUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-unline-discord" />;
}
